import axios from "axios";

const httpService = axios.create({
  baseURL: 'https://swapi.dev/api'
});


export function getForce(id) {
  return httpService.get(`/people/${id}/`);
}

httpService.interceptors.request.use(req => {
  
    req.timeReq = req.timeReq || {};
    req.timeReq = new Date().getTime();
    
    if (!req.headers["Content-Type"]) {
      req.headers["Content-Type"] = "application/json";
    }

    return req;
},
  req => {
    throw req;
  }
);

httpService.interceptors.response.use(resp => {

    resp.timeResp = resp.timeResp || {};
    resp.timeResp = ( new Date().getTime() - resp.config.timeReq );

    return { data: resp.data , timeResp: resp.timeResp };
},
  resp => {
    throw resp;
  }
);

