import React from "react";
import { StyledComponent } from "styled-components";



const MainPhoto = () => {




  return (<div>
            <div>사진만 나오는 메인페이지</div>
             
              <div className="card-box">
                
                <div className="card">
                 
                 <h1>사진보여주는공간(images)</h1>
                  <div className="contents">
                    <p>제목(title)</p>
                    <p>게시글내용(content)</p>
                    <p>장소(location)</p>
                      <div className="s-content">
                        <p>좋아요</p>
                        <p>조회수</p>
                        <p>작성된시간,수정된시간</p>
                      </div>


                  </div>

              
              </div>
           
            </div>

          </div>

   
  )
};

export default MainPhoto;
