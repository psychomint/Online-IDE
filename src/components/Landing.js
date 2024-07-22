import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import CodeWindow from "./CodeWindow";
import langoptions from "../constant/langoptions";
import OutputDetails from "./OutputDeatails";
import OutputWindow from "./OutputWindow";

const cppsnip = 
`#include<bits/stdc++.h>
using namespace std;

int main(){
    cout << "Hello" << endl;
    return 0;
}`;

const Landing = () => {
  const [language, setLanguage] = useState(langoptions[0]);
  const [theme, setTheme] = useState("monokai");
  const [code, setCode] = useState(cppsnip);
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);


  const onChange = (data) => {
        setCode(data);
  };

  const onSelectChange = (e) => {
    setLanguage(e);
  };

 

  const handleThemeChange = (th) => {
    setTheme(th);
  };

  const handleCompile = async () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
    };

    const options = {
      method: 'POST',
      url: `${process.env.REACT_APP_RAPID_API_URL}/submissions`,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        'Content-Type': 'application/json'
      },
      data: formData
    };

    try {
      const response = await axios.request(options);
      checkStatus(response.data.token);
    } catch (error) {
      let err = error.response ? error.response.data : error;
      let status = error?.response?.status;
      if (status === 429) {
        showErrorToast(
          `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
          10000
        );
      }
      setProcessing(false);
    }
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_RAPID_API_URL}/submissions/${token}`,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST
      }
    };

    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
      }
    } catch (err) {
      setProcessing(false);
      showErrorToast();
    }
  };

  const showErrorToast = (message, duration = 5000) => {
    toast.error(message || "Something went wrong! Please try again.", {
      position: "top-right",
      autoClose: duration,
    });
  };

  const showSuccessToast = (message, duration = 5000) => {
    toast.success(message || "Compiled Successfully!", {
      position: "top-right",
      autoClose: duration,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6 space-y-6">
      <ToastContainer />
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-4 text-gray-200">
        <SelectLanguage onSelectChange={onSelectChange} />
      </div>
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-4 text-gray-200">
        <SelectTheme handleThemeChange={handleThemeChange} theme={theme} />
      </div>
      <div className="w-full max-w-4xl bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col space-y-4">
        <CodeWindow
          onChange={onChange}
          code={code}
          language={language?.value}
          theme={theme}
        />
        <OutputDetails outputDetails={outputDetails} />
        <OutputWindow outputDetails={outputDetails} />
        <button
          onClick={handleCompile}
          disabled={!code}
          className={`self-end mt-4 px-4 py-2 rounded-md shadow-lg transition duration-200 ${
            processing ? "bg-gray-600 border-gray-500" : "bg-teal-600 border-teal-500 hover:bg-teal-700"
          } text-white border-2`}
        >
          {processing ? "Processing..." : "Compile and Execute"}
        </button>
      </div>
    </div>
  );
};

export default Landing;
