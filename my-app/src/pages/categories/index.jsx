import { useParams } from "react-router-dom"
import { Category } from "../../components/music-category";

export function Categories() {
    const {id} = useParams();
    const category = Category[id];

return (
    <div>
      <h1>Category Page {category}</h1>
    </div>
  );
}




