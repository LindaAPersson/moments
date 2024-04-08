import axios from "axios";

axios.defaults.baseURL = "https://pp5-django-a9b03945e70a.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

