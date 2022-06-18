import axios from 'axios';

const url ="https://localhost:5001";

export const LoginUser = (value) => {
   return axios.post(`${url}/api/User/loginUser`,value);
}


export const LoginCompany = (value) => {
   return axios.post(`${url}/api/Company/loginCompany`,value);
}

export const AllPost = () => {
   return axios.post(`${url}/api/InternshipPosting/getAllPost`);
}

export const GetUserAppPost = (value) => {
   return axios.post(`${url}/api/ApplicationIntern/userApp`,value);
}

export const GetAllPositions = () => {
   return axios.post(`${url}/api/InternshipPosition/getAllPositions`);
}
export const AddPostApi = (values) => {
   return axios.post(`${url}/api/InternshipPosting/addPost`,values);
}
export const GetCompanyPosts = (values) => {
   return axios.post(`${url}/api/InternshipPosting/getByCompanyIdPost`,values);
}

export const CompanyPost = (values) => {
   return axios.post(`${url}/api/ApplicationIntern/companyPost`,values);
}

export const AppIntern = (values) => {
   return axios.post(`${url}/api/ApplicationIntern/appIntern`,values);
}

export const RegisterUser = (value) => {
   return axios.post(`${url}/api/User/addUser`,value);
}

export const RegisterCompany = (value) => {
   return axios.post(`${url}/api/Company/addCompany`,value);
}

export const GetAllCity = () => {
   return axios.post(`${url}/api/City/getAllCity`);
}
export const GetAllSchool = () => {
   return axios.post(`${url}/api/School/getAll`);
}

export const GetUsersFromApp = (value) => {
   return axios.get(`${url}/api/User/getusersfromapp?id=`+value);
}
