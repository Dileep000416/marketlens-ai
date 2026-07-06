import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

/* ---------------- Dashboard ---------------- */

export const getDashboard = async (company) => {
  const response = await api.get(`/dashboard/${company}`);
  return response.data;
};

/* ---------------- Compare ---------------- */

export const compareCompanies = async (company1, company2) => {
  const response = await api.get(
    `/compare/${company1}/${company2}`
  );
  return response.data;
};

/* ---------------- Analytics ---------------- */

export const trackAnalyticsEvent = async ({
  event_type,
  company,
  company_2 = null,
}) => {
  await api.post("/analytics/event", {
    event_type,
    company,
    company_2,
  });
};

export const getAnalyticsDashboard = async () => {
  const response = await api.get(
    "/analytics/dashboard"
  );
  return response.data;
};

/* ---------------- Insights ---------------- */

export const getInsights = async (company) => {
  const response = await api.get(`/insights/${company}`);
  return response.data;
};

/* ---------------- News ---------------- */

export const getNews = async (company) => {
  const response = await api.get(`/news/${company}`);
  return response.data;
};

export default api;