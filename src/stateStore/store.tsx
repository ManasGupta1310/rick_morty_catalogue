import axios from 'axios';
import create from 'zustand';

interface ILocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
interface IState {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    gender:string;
    origin: {
      name: string;
      url: string;
    }
    location: {
      name: string;
      url: string;
    }
    image:string;
    episode: string[];
  };
  getCharacter: (id:any) => void;
  locations: ILocation[];
  getLocations: () => void;
  locationsLoad: boolean;
  location: ILocation;
  getLocation: (id:any) => void;
  locationLoad: boolean;
}
const useStore = create<IState>()((set) => ({
  character: {
    name: '', id: '', gender: '', species: '', status: '', origin: { url: '', name: '' }, location: { url: '', name: '' }, episode: [''], image: '',
  },
  getCharacter: async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    set({ character: data });
  },

  locations: [],
  locationsLoad: false,
  getLocations: async () => {
    await axios.get('https://rickandmortyapi.com/api/location')
      .then((response) => {
        const urls = [];
        const { pages } = response.data.info;

        for (let i = 0; i < pages; i += 1) {
          urls.push(`https://rickandmortyapi.com/api/location?page=${i + 1}`);
        }
        const fetchData = (url:string) => axios
          .get(url)
          .then((res) => ({
            data: res.data,
          }));

        const getAllData = (links:any) => Promise.all(links.map(fetchData));

        getAllData(urls)
          .then((res) => {
            const loc:any[] = [];
            res.map((rs) => loc.push(...rs.data.results));
            set({ locations: loc });
            set({ locationsLoad: true });
          });
      });
  },

  location: {
    id: ' ', name: '', type: '', dimension: '', residents: [''],
  },
  locationLoad: false,
  getLocation: async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    set({ location: data });
    set({ locationLoad: true });
  },
}));

export default useStore;
