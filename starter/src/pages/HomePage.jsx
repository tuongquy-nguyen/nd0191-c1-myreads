import Title from "../components/Title";
import ListBookContent from "../components/ListBookContent";

const HomePage = () => {
  return (
    <div className="list-books">
      <Title title="MyReads" />
      <ListBookContent />
    </div>
  );
};

export default HomePage;
