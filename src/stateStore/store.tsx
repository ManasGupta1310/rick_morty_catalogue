import axios from 'axios';
import create from 'zustand';

const useStore = create((set) => ({
  character: {},
  getCharacter: async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    set({ character: data });
  },
  locations: [],
  locationLoad: false,
  getLocations: async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/location');
    set({ locations: data.results });
    set({ locationLoad: true });
  },
}));

export default useStore;
