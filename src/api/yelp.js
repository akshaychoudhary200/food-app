import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Gf0uf3wHHl_XKffvrh03OF28DveHVxOj2o8I0efyAVurq5wN5eYNcjrMFS8UV9fY5ZNbEL8hnwGo4N_yi2UWuV4S66BqpZmOhFRsUi-I3IPk4-DDvLdB-nYUINE_ZHYx",
  },
});
