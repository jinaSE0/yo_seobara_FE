import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useEffect, useState}from 'react';
import { CommentBox,UserBox, Time, Comment,Text } from './style';

//라이브러리
import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/ko';      //한국말 번역


 const CommentList =(id)=> {


  
  const idNum = id.id // postId
// console.log(idNum)


  const [comments,setComments] = useState([
    {
      commentId: '댓글아이디',
      nickname: '작성자닉네임',
      comment: '댓글내용',
      creativeAt: '작성 시간',
      modifiedAt: '수정 시간'
    },
    {
      commentId: '댓글아이디22',
      nickname: '작성자닉네임22',
      comment: '댓글내용22',
      creativeAt: '작성 시간22',
      modifiedAt: '수정 시간22'
    },

    // {
    // postId: 1,
    // id: 3,
    // name: "odio adipisci rerum aut animi",
    // email: "Nikita@garfield.biz",
    // body: "quia molestiae reprehenderit quasi aspernatur"
    // },


  ])


  useEffect(() => {
    

    //실전서버용
    // await axios
    // .get(`${process.env.REACT_APP_API_URL}/api/posts/${idNum}/comments`, {
    //   headers: {
    //     Authorization: `Bearer ${getCookie('accessToken')}`,
        
    //   },
    // })
    // .then((res) => {
    //   console.log('불러온 데이터', res);
      
      
    // })
    // .catch((err) => console.log(err));



  // 가상서버 테스트용
  //   await axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${idNum}`)
  //     .then((res) => {
        
  //       const list = res.data
  //       console.log(idNum,list)
        
  //       setComments(list)
        
         
  //     })
  //  .catch(err=> console.log(err))

  


  }, []);
  
  const nowTime = moment().format('2022-09-12 15:20:03'),  // 서버로부터 받은 작성,또는수정시간
        startTime = new Date(nowTime);

//2022-09-12 15:20:03 형식
// const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
// console.log(nowTime);


//숫자형식
// const nowTime2 = Date.now();
// console.log(nowTime2);



  return (

    <List style={{height: 300,  
    width:'100%'
    }}>
    
        <CommentBox>
        <UserBox>
          닉네임
          
          </UserBox>          
        <Comment>댓글내용ㅇㅇ</Comment>
        <Time>몇분전</Time>
        </CommentBox>



                
                    
   </List>
      
                          
                    

  );
}

export default CommentList;

//mui 스타일 댓글창
{/* <List style={{height: 300,  display:'block',
width:'100%'
}}>

        {comments.map((comment,idx)=>(
          <>
        <ListItem alignItems="flex-start">
        
        <ListItemText
        sx={{ fontSize: 15 }}
        primary={comment.name}
        
        secondary={
        <React.Fragment>
        <Typography
        sx={{ display: 'flex',fontSize: 20 }}
        component="span"
        variant="body2"
        color="text.primary"
        >
        {comment.comment}
        {comment.body}
        </Typography>
        </React.Fragment>
        }
        />

        <Time><Moment fromNow>{startTime}</Moment></Time>
        </ListItem>
        <Divider variant="inset" component="li" />

        </>))}



            
                
</List> */}




