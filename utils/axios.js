const axios = require("axios");

export const mint = async (contractAddress, to) => {
  try {
    const response = await axios.post(
      "https://api.defender.openzeppelin.com/autotasks/fd2c927a-aecf-4eed-aca8-647650cb8afd/runs/webhook/c9d2615b-d885-4605-ad0f-293d76dc20b3/UscQ79SUTpUDLR7eeJrY9u",
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
