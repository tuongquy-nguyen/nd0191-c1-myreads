import Title from "../components/Title";
import ListBookContent from "../components/ListBookContent";

const Home = () => {
  return (
    <div className="list-books">
      <Title title="MyReads" />
      <ListBookContent />
    </div>
  );
};

export default Home;
