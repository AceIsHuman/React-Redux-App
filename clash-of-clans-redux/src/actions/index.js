import axios from "axios";

export const LOAD_PLAYER = "LOAD_PLAYER";
export const PLAYER_LOADED = "PLAYER_LOADED";

export const fetchPlayer = (playerTag = "#CVU0G2G") => {
  return function(dispatch) {
    dispatch({ type: LOAD_PLAYER });
    axios
      .get(`https://api.clashofclans.com/v1/players/${playerTag}`, {
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZmMjA4MWU4LTJlMDAtNDFhNS1hMTkyLTVjNjM5YWUzZjkzYyIsImlhdCI6MTU2OTU0ODUwNCwic3ViIjoiZGV2ZWxvcGVyLzJjYzQxYzZkLTcwN2EtMGJlZS1hMDdiLTZiYzM3ZTJmNGU4NyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjcwLjEyMC4yMjMuMTIzIl0sInR5cGUiOiJjbGllbnQifV19.vCgeK0KE4XudldAcv302mmhmMdGOOjAiZiuIzvN4m7phMvDmKhc7O3O5vEvaMvWo3FhpUapGCIsnemXdOZFVoQ'
        }
      })
      .then(res => {
        console.log(res);
      })
  };
};