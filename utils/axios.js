const axios = require("axios");

export const mint = async (contractAddress, to) => {
  try {
    const response = await axios.post(
      "https://api.defender.openzeppelin.com/autotasks/819ef26d-30ab-404f-b753-0f182c614b54/runs/webhook/c9d2615b-d885-4605-ad0f-293d76dc20b3/Pkb39oryhVDdXWdnD3cfid",
      { contractAddress, to }
    );
    if (!response.data.result) {
      throw Error(response.data.message);
    }
    return JSON.parse(response.data.result).hash;
  } catch (error) {
    throw Error(error);
  }
};
