import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]); //이미지배열
  const [isLoading, setIsLoding] = useState(true); //로딩중 상태
  const [term, setTerm] = useState("flowers"); //검색어
  //처음 시작시 이미지들을 받아서 images에 저장
  useEffect(() => {
    //fecth메소드로 픽사베에서 검색한 이미지 데이터들을 받음
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong> 4000
          </li>
          <li>
            <strong>Downloads: </strong> 300
          </li>
          <li>
            <strong>Likes: </strong> 400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
