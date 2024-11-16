import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightAside from "../Components/RightAside";


const NewDetails = () => {

    const data = useLoaderData();

    const news = data.data[0];

    console.log(news);
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
            </header>
            <h2 className="font-bold mb-3">Dragon News</h2>
            <div className="grid md:grid-cols-12">
                <div className="col-span-9">

                <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link to={'/'} className="btn btn-primary">Back to categories</Link>
    </div>
  </div>
</div>

                </div>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewDetails;