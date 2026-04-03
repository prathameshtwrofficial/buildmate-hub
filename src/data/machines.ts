import backhoeImg from "@/assets/machine-backhoe.jpg";
import craneImg from "@/assets/machine-crane.jpg";
import bulldozerImg from "@/assets/machine-bulldozer.jpg";
import mixerImg from "@/assets/machine-mixer.jpg";

export interface Machine {
  id: string;
  name: string;
  category: string;
  image: string;
  pricePerHour: number;
  pricePerDay: number;
  rating: number;
  reviews: number;
  available: boolean;
  location: string;
  specs: Record<string, string>;
  description: string;
}

export const machines: Machine[] = [
  {
    id: "1",
    name: "JCB 3CX Backhoe Loader",
    category: "Machines",
    image: backhoeImg,
    pricePerHour: 1500,
    pricePerDay: 12000,
    rating: 4.8,
    reviews: 124,
    available: true,
    location: "Mumbai, MH",
    specs: { "Power": "92 HP", "Weight": "8 tons", "Depth": "5.5m", "Bucket": "1.0 m³" },
    description: "Versatile backhoe loader perfect for excavation, trenching, and material handling on construction sites.",
  },
  {
    id: "2",
    name: "Mobile Hydraulic Crane 50T",
    category: "Machines",
    image: craneImg,
    pricePerHour: 3500,
    pricePerDay: 28000,
    rating: 4.9,
    reviews: 87,
    available: true,
    location: "Delhi, DL",
    specs: { "Capacity": "50 tons", "Boom": "40m", "Engine": "240 HP", "Drive": "6x4" },
    description: "Heavy-duty mobile crane with 50-ton lifting capacity for large construction and infrastructure projects.",
  },
  {
    id: "3",
    name: "D6 Bulldozer",
    category: "Machines",
    image: bulldozerImg,
    pricePerHour: 2500,
    pricePerDay: 20000,
    rating: 4.7,
    reviews: 56,
    available: false,
    location: "Pune, MH",
    specs: { "Power": "215 HP", "Weight": "20 tons", "Blade": "3.9m", "Track": "560mm" },
    description: "Powerful bulldozer for earthmoving, grading, and site preparation on large-scale projects.",
  },
  {
    id: "4",
    name: "Concrete Mixer Truck 6m³",
    category: "Machines",
    image: mixerImg,
    pricePerHour: 1800,
    pricePerDay: 14000,
    rating: 4.6,
    reviews: 93,
    available: true,
    location: "Bangalore, KA",
    specs: { "Capacity": "6 m³", "Engine": "180 HP", "Drum Speed": "14 RPM", "Discharge": "3 min" },
    description: "Reliable concrete mixer truck for continuous concrete supply to construction sites.",
  },
  {
    id: "5",
    name: "JCB 220X Excavator",
    category: "Machines",
    image: backhoeImg,
    pricePerHour: 2200,
    pricePerDay: 18000,
    rating: 4.9,
    reviews: 201,
    available: true,
    location: "Chennai, TN",
    specs: { "Power": "166 HP", "Weight": "22 tons", "Depth": "6.7m", "Bucket": "1.2 m³" },
    description: "High-performance excavator with advanced hydraulics for maximum productivity.",
  },
  {
    id: "6",
    name: "Tower Crane TC 7030",
    category: "Machines",
    image: craneImg,
    pricePerHour: 5000,
    pricePerDay: 40000,
    rating: 4.8,
    reviews: 42,
    available: true,
    location: "Hyderabad, TS",
    specs: { "Capacity": "16 tons", "Jib Length": "70m", "Height": "65m", "Power": "75 kW" },
    description: "High-rise tower crane for multi-story building construction and heavy lifting operations.",
  },
];

export const categories = [
  { id: "machines", name: "Machines", icon: "🏗️", count: 48, description: "Excavators, loaders, cranes & more" },
  { id: "materials", name: "Construction Materials", icon: "🧱", count: 156, description: "Cement, steel, sand & aggregates" },
  { id: "equipment", name: "Project Equipment", icon: "⚙️", count: 72, description: "Tools, scaffolding & safety gear" },
  { id: "packages", name: "Custom Packages", icon: "📦", count: 12, description: "Bundled solutions for your project" },
];

export const stats = [
  { label: "Machines Available", value: "500+" },
  { label: "Projects Completed", value: "2,400+" },
  { label: "Cities Covered", value: "50+" },
  { label: "Happy Clients", value: "1,200+" },
];
