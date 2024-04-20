//컴포넌트를 만들어서 내보내다.

//리액트 아이콘 설치
//npm install react-icons
import {FaStar} from 'react-icons/fa'
// 전용 css 연결
import './styles.css'

// StarRating 컴포넌트
export default function StarRating()
{
 // starCount(병 갯수)는 5개를 기본값으로, 컴포넌트를 사용하는 곳에서 정할수있게
 // state 2개를 만들기 (별집, 마우스오버 위치)
 let [score, setScore] =useState(0);
 let [hover, setHover] =useState(0);

 // 배열 : @ 별 갯수 (starCount) --> 반복문 map
 let stars = [];
 for(let i=0; i<starCount;i++)
 {
    stars.push(I+1);      // [1,2.4.4.5]
 }
 function handleMouseClick(element)
 {
    // 클릭한 별에다가 setScore()
    console.log(element);
    setScore(element);
 }
 function handleMouseMove(element)
 {
  // 마우스가 들어간 별에다가 setHover()
  // 어느 별 위에 마우스가 올라가있는지? :  받아와야 한다 매개변수로
  //console.log(element);
  setHover(element);
 }   
  function handleMouseLeave(element)
{
  // 마우스가 나간별에다가 setHover(별점)
  // 별에서 마우스가 나갔다? 점수랑 동일하게 맞처준다(색깔 맞추기위해서)
  setHover(score);
  }

 return(
 <>
        <div>
       {
        // JSX안에다가 자바스크립트 넣으려면 {}
        // map : 배열의 갯수만큼 반복, 첫번째는 각 내부요소의 값, 두번째는 인덱스(위치)
        // map 안에 콜백함수를 넣어서 동작
        stars.map((e, idx)=>{
        // e: 1, 2, 3, 4, 5
        // idx : 0, 1, 2, 3, 4 (배열 위치값)


         // 반복적으로 생성할 HTML(JSX)은 return에 작성
         return(
            <FaStar size={40} key={e}
            // 마우스가 올라가 있거나, 선택된 상태면 클래스명을 변경(클릭, 마우스무브, 마우스리브)
            // 삼항연산자를 써서 상황에 따라 클래스명을 변경(5개에 대해)
              className={e <= (hover || score) ? 'active' : 'inactive'}
            onClick={()=>{handleMouseClick(e)}}
            onMouseMove={()=>{handleMouseMove(e)}}
            onMouseLeave={()=>{handleMouseLeave()}}
            />
          )
        })
      }


        </div>
        </>
    )
}