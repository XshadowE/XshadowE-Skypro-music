import { useParams } from "react-router-dom"
import { Categories } from "../../components/music-category";

export function Category() {
    const {id} = useParams();
    const category = Categories[id];

return (
    <div>
      <h1>Category Page {category.id}</h1>
    </div>
  );
}




