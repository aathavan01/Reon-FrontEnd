import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'boxicons/dist/boxicons.min.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'remixicon/fonts/remixicon.css'
import 'simple-datatables/src/style.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'apexcharts/dist/apexcharts.min.js'
import 'chart.js/dist/chart.min.js'
import 'echarts/dist/echarts.min.js'
import 'quill/dist/quill.min.js'
import 'simple-datatables/dist/umd/simple-datatables'
import 'tinymce/tinymce.min.js'


import './assets/css/style.css'
import Index from "./user/pages/Index";
import Vehicles from "./user/pages/Vehicles";
import Tracktors from "./user/pages/Vehicle/Farming/Tractors";
import Harvester from "./user/pages/Vehicle/Farming/Harvester";
import Seeders from "./user/pages/Vehicle/Farming/Seeders";
import Autonomous from "./user/pages/Vehicle/Farming/Autonomous";
import Bulldozer from "./user/pages/Vehicle/Constructions/Bulldozer";
import FrontLoaders from "./user/pages/Vehicle/Constructions/FrontLoaders";
import VehicleDetails from "./user/pages/VehicleDetails";
import OwnerPage from "./user/OwnerPage/OwnerPage";


function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Index/>} />
			<Route exact path="/vehicles" element={<Vehicles/>} />

			{/* Farming */}
			<Route exact path="/vehicles/tractors" element={<Tracktors/>} />
			<Route exact path="/vehicles/harvester" element={<Harvester/>} />
			<Route exact path="/vehicles/seeders" element={<Seeders/>} />
			<Route exact path="/vehicles/autonomous" element={<Autonomous/>} />
			<Route exact path="/vehicles/harvester" element={<Harvester/>} />

			{/* Construction */}
			<Route exact path="/vehicles/bulldozer" element={<Bulldozer/>} />
			<Route exact path="/vehicles/frontLoaders" element={<FrontLoaders/>} />

			<Route exact path="/vehicles/harvester/id:details" element={<VehicleDetails/>} />

			{/* OwnerProfile */}
			<Route exact path="/ownerPage" element={<OwnerPage/>} />
			

			




		</Routes>
	);
}

export default App;