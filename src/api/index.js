import axios from "axios";
const baseUrl = `https://strapi-backend-techwondoe.herokuapp.com`;

export const getHeaderData = async () => {
  const response = await axios.get(`${baseUrl}/api/headers?populate=*`, {
    method: "GET",
  });
  return response.data.data;
};

export const getNavbarData = async () => {
  const response = await axios.get(`${baseUrl}/api/nav-bars`, {
    method: "GET",
  });
  return response.data.data;
};
export const getChooseData = async () => {
  const response = await axios.get(
    `${baseUrl}/api/section-chooses?populate=chooses`,
    {
      method: "GET",
    }
  );
  return response.data.data;
};

export const getTeamData = async () => {
  const response = await axios.get(
    `${baseUrl}/api/teams?populate=teamBanner,vector`,
    {
      method: "GET",
    }
  );
  return response.data.data;
};

export const getNewsSectionData = async () => {
  const response = await axios.get(`${baseUrl}/api/section-newss`, {
    method: "GET",
  });
  return response.data.data;
};

export const getNewsData = async () => {
  const response = await axios.get(`${baseUrl}/api/newss?populate=newsBanner`, {
    method: "GET",
  });
  return response.data.data;
};

export const getPeopleData = async () => {
  const response = await axios.get(
    `${baseUrl}/api/section-peoples?populate=*`,
    {
      method: "GET",
    }
  );
  return response.data.data;
};

export const getCareerData = async () => {
  const response = await axios.get(`${baseUrl}/api/careers`, {
    method: "GET",
  });
  return response.data.data;
};

export const getFooterData = async () => {
  const response = await axios.get(`${baseUrl}/api/footers?populate=*`, {
    method: "GET",
  });
  return response.data.data;
};
