import React, { useState } from "react";
import { createApi } from "unsplash-js";
import { QueryContext } from "./context";

const State = (props) => {
  const [data, setData] = useState("");
  const [totalImgs, setTotalImgs] = useState("");
  const [imgData, setImgData] = useState("");
  const [query, setQuery] = useState("");
  const unsplash = new createApi({
    accessKey: "Mhqm5c5F2uFWV4qtFZYThwurvv6s15QyHOddUmQXIcA",
  });

  const querySearch = (query, page) => {
    console.log(query);
    setQuery(query);
    unsplash.search
      .getPhotos({
        query: query,
        orientation: "portrait",
        page: page,
      })
      .then((json) => {
        setData(json.response.results);
        setTotalImgs(json.response.total);

      });
  };
  const imageSearch = (id) => {
    console.log(id)
    unsplash.photos
      .get({
        photoId: id,
        orientation: "landscape",
      })
      .then((json) => {
        setImgData(json.response);
        console.log(json);
      });
  };

  return (
    <div>
      <QueryContext.Provider
        value={{
          query,
          data,
          imgData,
          setImgData,
          imageSearch,
          totalImgs,
          setTotalImgs,
          setData,
          querySearch,
        }}
      >
        {props.children}
      </QueryContext.Provider>
    </div>
  );
};

export default State;
