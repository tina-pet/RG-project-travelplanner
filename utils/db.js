const API_SERVER = 'https://czechitas-itinerar.free.beeceptor.com';
export default {
  categoryList: () => {
    return fetch(API_SERVER + '/kategorie', {
      method: 'GET',
    }).then((resp) => resp.json());
  },

  itineraryList: () => {
    return fetch(API_SERVER + '/itinerar', {
      method: 'GET',
    }).then((resp) => resp.json());
  },

  itineraryAppend: (data) => {
    return fetch(API_SERVER + '/itinerar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  },

  itineraryUpdate: (data) => {
    return fetch(API_SERVER + `/itinerar/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  },

  itemList: (itineraryId) => {
    return fetch(API_SERVER + `/itinerar/${itineraryId}/polozka`, {
      method: 'GET',
    }).then((resp) => resp.json());
  },

  itineraryDetail: (itineraryId) => {
    return fetch(API_SERVER + `/itinerar/${itineraryId}`, {
      method: 'GET',
    }).then((resp) => resp.json());
  },

  itemAppend: (data, itineraryId) => {
    return fetch(API_SERVER + `/itinerar/${data.id}/polozka`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  },

  itemUpdate: (data) => {
    return fetch(
      API_SERVER + `/itinerar/${data.itinerarId}/polozka/${data.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then((resp) => resp.json());
  },

  itemDelete: (data) => {
    return fetch(
      API_SERVER + `/itinerar/${data.itinerarId}/polozka/${data.id}`,
      {
        method: 'DELETE',
      },
    ).then((resp) => resp.json());
  },
};
