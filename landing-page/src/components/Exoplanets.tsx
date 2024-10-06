import { useEffect, useState } from 'react';
import "../App.css";
import { Search } from 'lucide-react';

interface Exoplanet {
  pl_name: string;
  hostname: string;
  sy_snum: string;
  sy_pnum: string;
  discoverymethod: string;
  disc_year: string;
  disc_facility: string;
  pl_rade?: string | null;
  pl_radj?: string | null;
  pl_bmasse?: string | null;
  st_spectype?: string | null;
  st_teff?: string | null;
  st_rad?: string | null;
  st_mass?: string | null;
  st_met?: string | null;
  st_metratio?: string | null;
  rastr: string;
  ra: string;
  sy_dist?: string | null;
}

interface ExoplanetItem {
  planet: Exoplanet;
}

const ExoplanetCard = ({planet}: ExoplanetItem) => (
    <div className="bg-slate-700 border border-slate-600 rounded hover:bg-slate-600 transition-colors duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl text-white mb-2"><span className="font-bold">Name of exoplanet:</span> {planet.pl_name}</h3>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span>{planet.hostname}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">year of discovery: </span>{planet.disc_year}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">Temperature:</span> {planet.st_teff} K</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm mb-1">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">Distance from Earth:</span> {planet.sy_dist}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-4 h-4 mr-2" />
              <span><span className="font-bold">When it was discovered:</span> {planet.discoverymethod}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
);

const Exoplanets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExoplanetApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/search-planets/${searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        setFetchedData(data);
      } else {
        console.error("Failed to fetch data from API");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExoplanetApi();
  }, [searchQuery]);// Re-fetch data when searchQuery changes


  const filteredPlanets = fetchedData.filter((planet: Exoplanet) =>
      planet.pl_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      planet.hostname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="bg-slate-800 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">ExoSearch</h1>
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search exoplanets..."
                  className="bg-slate-700 shadow-lg rounded-lg placeholder-gray-400 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition w-full text-lg"
              />
              <Search
                  size={24}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {loading ? (
              <div className="text-center text-gray-400 mt-8">
                Loading exoplanets...
              </div>
          ) : filteredPlanets.length === 0 ? (
              <div className="text-center text-gray-400 mt-8">
                No exoplanets found matching your search criteria
              </div>
          ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPlanets.map((planet, index) => (
                    <ExoplanetCard key={index} planet={planet} />
                ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default Exoplanets;