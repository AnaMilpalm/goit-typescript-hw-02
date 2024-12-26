import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loading from "../Loading/Loading";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  likes: number;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearch = (newQuery: string) => {
    if (newQuery.trim() === "") {
      toast("Please fill a searching field!");
    } else {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const url = query
          ? `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=s8iCvl-a7Zb2qE0wgVuqRid5TbMOqCqrEHbjrKvkTTE`
          : `https://api.unsplash.com/photos?client_id=s8iCvl-a7Zb2qE0wgVuqRid5TbMOqCqrEHbjrKvkTTE`;

        const response = await axios.get(url);

        if (response.data.results.length === 0 && page === 1) {
          toast("No images matching your search query. Please try again!");
        } else {
          setImages((prevImages) => [
            ...prevImages,
            ...(response.data.results || response.data),
          ]);
          setTotalResults(response.data.total || 0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load images! Try again!");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="wrapper">
      <SearchBar onSearch={handleSearch} />
      {loading && <Loading />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <Toaster />
      <ImageModal
        image={selectedImage}
        closeModal={closeModal}
        openModal={modalIsOpen}
      />
    </div>
  );
};

export default App;
