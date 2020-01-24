import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { Row, Col, Input } from "antd";
import Lodash from "lodash";
import styled from "styled-components";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

export default function Items() {
  const Spacing = styled(Col)`
    margin-top: 2rem;
  `;
  const SPagination = styled(Pagination)`
    margin-top: 2rem;
  `;

  const [fetchData, setFetchData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [searchInput, setSearchInput] = useState(null);

  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    Axios.get(
      "https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json"
    ).then(json => {
      setFetchData(Lodash.values(json.data.data));
      setSearchData(Lodash.values(json.data.data));
    });
  }, []);

  useEffect(() => {
    if (searchInput != null) {
      setSearchData(
        fetchData.filter(champion =>
          champion.name.toLowerCase().includes(searchInput)
        )
      );
    }
  }, [searchInput]);

  return (
    searchData && (
      <div className="App">
        <Input
          style={{ width: "300px" }}
          id="search"
          name="search"
          placeholder="Search"
          key="inptkey"
          onInput={e => setSearchInput(e.target.value)}
        />

        <Row>
          {searchData
            .filter((champion, i) => {
              if (pageNum === 1) return i < 20;
              else return i > (pageNum - 1) * 20 && i <= pageNum * 20;
            })
            .map(champion => (
              <Spacing span={6} key={champion.id}>
                <Link to={`/champions/${champion.id}`}>
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/10.2.1/img/champion/${champion.image.full}`}
                    alt=""
                  />
                </Link>
                <h1>{champion.name}</h1>
              </Spacing>
            ))}
        </Row>
        <SPagination
          defaultCurrent={pageNum}
          total={searchData.length}
          defaultPageSize={20}
          onChange={page => setPageNum(page)}
          showLessItems
          showQuickJumper
        />
      </div>
    )
  );
}
