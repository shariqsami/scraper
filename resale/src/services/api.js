const fetchJSON = async ({ url }) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"

    },
  });

  return res.json();
};

const fetchJSONPOST = async ({ url }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

const fetchJSONPOSTwithbody = async ({ url,body }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(body)
  });

  return res.json();
};



const Api = (credentials) => ({
  search: ({ queryString,pageno }) => fetchJSONPOSTwithbody({ url: `http://64.227.2.220/resale/index.php/api/search_api?page=${pageno}&${queryString}`,body:{"api_token":localStorage.getItem('token')} }),
  search_pub: ({ queryString,pageno }) => fetchJSONPOSTwithbody({ url: `http://64.227.2.220/resale/index.php/api/search_api_pub?page=${pageno}&${queryString}`}),

  // house: ({ id }) => fetchJSON({ url: `/api/v1/houses/${id}.json` }),
  house: ({ id }) => fetchJSON({ url: `http://64.227.2.220/resale/index.php/api/propertie_details/${id}` }),
  // locations: ({ search }) => fetchJSON({ url: `/api/v1/locations.json?search=${search}` }),
  locations: ({ search,type }) => fetchJSON({ url: `http://64.227.2.220/resale/index.php/api/location_api/${type}/${search}` }),
  propertyTypes: () => fetchJSON({ url: "http://64.227.2.220/resale/index.php/api/property_type" }),
  summary: () => fetchJSON({ url: "http://64.227.2.220/resale/index.php/api/summary_api" }),
  userPofile: ({id})=> fetchJSON({url:`http://64.227.2.220/resale/index.php/api/user_details?api_token=${id}`}),
  getPackages: () => fetchJSON({url: "http://64.227.2.220/resale/index.php/api/package_list"}),
  subscribe:(package_id,user_id)=>fetchJSON({url:`http://64.227.2.220/resale/index.php/api/apply_package_api/${package_id}/${user_id}`}),
  login: (email,password) => fetchJSONPOSTwithbody({url:`http://64.227.2.220/resale/index.php/api/login_api`,body:{email:email,password:password}}),
  signin: (name,password,email) => fetchJSONPOST({ url: `http://64.227.2.220/resale/index.php/api/register_api?name=${name}&password=${password}&email=${email}` }),
});

export default Api;
