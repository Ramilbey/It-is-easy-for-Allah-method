import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  const [goal, setGoal] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [result, setResult] = useState("");

  // List of 99 Names of Allah (Sample Data)
  const namesOfAllah = [
    { name: "Ar-Razzaq", meaning: "The Provider" },
  { name: "Al-Hakeem", meaning: "The All-Wise" },
  { name: "As-Salam", meaning: "The Source of Peace" },
  { name: "Al-Mu’min", meaning: "The Giver of Faith and Security" },
  { name: "Al-Muhaymin", meaning: "The Guardian" },
  { name: "Al-‘Aziz", meaning: "The All Mighty" },
  { name: "Al-Jabbar", meaning: "The Compeller" },
  { name: "Al-Mutakabbir", meaning: "The Supreme" },
  { name: "Al-Khaliq", meaning: "The Creator" },
  { name: "Al-Bari", meaning: "The Evolver" },
  { name: "Al-Musawwir", meaning: "The Fashioner" },
  { name: "Al-Ghaffar", meaning: "The Constant Forgiver" },
  { name: "Al-Qahhar", meaning: "The All-Prevailing One" },
  { name: "Al-Wahhab", meaning: "The Supreme Bestower" },
  { name: "Al-Fattah", meaning: "The Supreme Solver" },
  { name: "Al-‘Alim", meaning: "The All-Knowing" },
  { name: "Al-Hakeem", meaning: "The All-Wise" },
  { name: "Al-Quddus", meaning: "The Most Sacred" },
  { name: "As-Sabur", meaning: "The Patient" },
  { name: "Al-Kabir", meaning: "The Most Great" },
  { name: "Al-Muqaddim", meaning: "The Expediter" },
  { name: "Al-Mu'akhkhir", meaning: "The Delayer" },
  { name: "Al-Awwal", meaning: "The First" },
  { name: "Al-Akhir", meaning: "The Last" },
  { name: "Az-Zahir", meaning: "The Manifest" },
  { name: "Al-Batin", meaning: "The Hidden One" },
  { name: "Al-Wali", meaning: "The Protecting Associate" },
  { name: "Al-Muta’ali", meaning: "The Self Exalted" },
  { name: "Al-Barr", meaning: "The Source of All Goodness" },
  { name: "At-Tawwab", meaning: "The Ever-Pardoning" },
  { name: "Al-Muntaqim", meaning: "The Avenger" },
  { name: "Al-‘Afuww", meaning: "The Pardoner" },
  { name: "Ar-Ra'uf", meaning: "The Most Kind" },
  { name: "Malik-ul-Mulk", meaning: "Master of the Kingdom" },
  { name: "Zul-Jalali Wal-Ikram", meaning: "Lord of Glory and Honour" },
  { name: "Al-Muqsit", meaning: "The Just One" },
  { name: "Al-Jami‘", meaning: "The Gatherer" },
  { name: "Al-Ghani", meaning: "The Self-Sufficient" },
  { name: "Al-Mughni", meaning: "The Enricher" },
  { name: "Al-Mani‘", meaning: "The Withholder" },
  { name: "Ad-Darr", meaning: "The Distresser" },
  { name: "An-Nafi‘", meaning: "The Propitious" },
  { name: "An-Nur", meaning: "The Light" },
  { name: "Al-Hadi", meaning: "The Guide" },
  { name: "Al-Badi‘", meaning: "The Incomparable Originator" },
  { name: "Al-Warith", meaning: "The Inheritor" },
  { name: "Ar-Rashid", meaning: "The Guide to the Right Path" },
  { name: "As-Sabur", meaning: "The Patient" },
  { name: "Al-Latif", meaning: "The Subtle One" },
  { name: "Al-Khabir", meaning: "The All-Aware" },
  { name: "Al-Halim", meaning: "The Most Forbearing" },
  { name: "Al-Azim", meaning: "The Magnificent" },
  { name: "Al-Ghafur", meaning: "The Great Forgiver" },
  { name: "Ash-Shakur", meaning: "The Most Appreciative" },
  { name: "Al-‘Adl", meaning: "The Utterly Just" },
  { name: "Al-Karim", meaning: "The Most Generous" },
  { name: "Ar-Rahman", meaning: "The Most Compassionate" },
  { name: "Ar-Rahim", meaning: "The Most Merciful" },
  { name: "Al-Malik", meaning: "The King" },
  { name: "Al-Quddus", meaning: "The Most Sacred" },
  { name: "As-Salam", meaning: "The Source of Peace" },
  { name: "Al-Mu’min", meaning: "The Giver of Faith" },
  { name: "Al-Muhaymin", meaning: "The Guardian" },
  { name: "Al-‘Aziz", meaning: "The All Mighty" },
  { name: "Al-Jabbar", meaning: "The Compeller" },
  { name: "Al-Mutakabbir", meaning: "The Supreme" },
  { name: "Al-Khaliq", meaning: "The Creator" },
  { name: "Al-Bari", meaning: "The Evolver" },
  { name: "Al-Musawwir", meaning: "The Fashioner" },
  { name: "Al-Ghaffar", meaning: "The Constant Forgiver" },
  { name: "Al-Qahhar", meaning: "The All-Prevailing One" },
  { name: "Al-Wahhab", meaning: "The Supreme Bestower" },
  { name: "Al-Fattah", meaning: "The Supreme Solver" },
  { name: "Al-‘Alim", meaning: "The All-Knowing" },
  { name: "Al-Hakeem", meaning: "The All-Wise" },
  { name: "Al-Quddus", meaning: "The Most Sacred" },
  { name: "As-Sabur", meaning: "The Patient" }
  ];

  const handleSubmit = () => {
    if (selectedName && goal) {
      setResult(`It is easy for ${selectedName} to ${goal}.`);
    } else {
      setResult("Please select a name and enter a goal.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center text-gray-900"
      >
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">It is Easy for Allah</h1>
        
        <motion.select
          whileFocus={{ scale: 1.05 }}
          className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="">Select a Name of Allah</option>
          {namesOfAllah.map((entry, index) => (
            <option key={index} value={entry.name}>{entry.name} - {entry.meaning}</option>
          ))}
        </motion.select>
        
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          placeholder="Enter your goal..."
          className="p-3 border border-gray-300 rounded-lg w-full mt-4 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          
        />
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          onClick={handleSubmit}
        >
          Submit
        </motion.button>
        
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-lg"
          >
            <p className="text-lg font-semibold">{result}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
