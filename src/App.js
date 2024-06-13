import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]); //이미지배열
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
  }, [term]);

  return (
    <div className="container mx-auto my-7">
      <ImageSearch setTerm={setTerm} />
      {images.length === 0 && (
        <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}

export default App;
