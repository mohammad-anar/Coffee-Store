import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();

    const [coffees , setCoffees] = useState(loadedCoffees);
    return (
        <div>
            <h2 className="text-4xl text-center py-4 font-bold">Hot Hot Cool Coffee : {coffees.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee => <CoffeeCard 
                    key={coffee._id} 
                    coffees={coffees}
                    setCoffees={setCoffees}
                    coffee={coffee}>
                    
                    </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;