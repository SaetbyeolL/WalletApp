import { AxiosInstance, axiosInstance } from ".";

//get all requests for a user
export const GetAllRequestsByUser = async () => {
  try {
    const { data } = await AxiosInstance.post(
      "/requests/get-all-requests-by-user"
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};

//send a request to another user
export const SendRequest = async (request) => {
  try {
    const { data } = await axiosInstance.post(
      "/requests/send-request",
      request
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};



















