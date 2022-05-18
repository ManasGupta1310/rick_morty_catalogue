import axios from 'axios';
import create from 'zustand';

const useStore = create((set) => ({
  character: {
    id: '', name: '', gender: '', status: '', origin: { url: '' }, location: { url: '' }, episode: [''],
  },
  getCharacter: async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    set({ character: data });
  },

  locations: [{
    id: '', name: '', type: '', dimension: '', residents: [], url: '',
  }],
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
          }))
          .catch((err) => {
            console.log(err);
          });

        const getAllData = (links:any) => Promise.all(links.map(fetchData));

        getAllData(urls)
          .then((res) => {
            const loc:any[] = [];
            res.map((rs) => loc.push(...rs.data.results));
            set({ locations: loc });
            set({ locationsLoad: true });
          })
          .catch((e) => {
            console.log(e);
          });
      });
  },

  location: {
    id: '', name: '', type: '', dimension: '', residents: [], url: '',
  },
  locationLoad: false,
  getLocation: async (id:string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    set({ location: data });
    set({ locationLoad: true });
  },
}));

export default useStore;
