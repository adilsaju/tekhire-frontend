import { OFFERS_BY_JOBID,
    ROOMS,
    ACCEPT_OFFER,
    REJECT_OFFER,
    JOBS,
    JOBS_BY_EMPLOYER_ID,
    JOB_BY_ID,
    MESSAGES,
    NOTIFICATIONS_BY_TECHID,
    ALL_OFFERS,
    CLOCKIN,
    CLOCKOUT,
    EMPLOYMENT_BY_OFFERID,
    OFFERS_BY_TECHID,
    NOTIFICATIONS_BY_EMPID
} from './api_config';



// export const getOffersByJobId = (id) => {
//     const url = OFFERS_BY_JOBID(id);
  
//     return fetch(url)
//       .then((resp) => resp.json())
//       .catch((error) => console.error(error));
//   };

export const generic = async (url, id=null ) => {
try {
    let response = null
    if (id)
    {
        response = await fetch(url(id));
    }
    else
    {
        response = await fetch(url);
    }
    const data = await response.json();
    return data;
} catch (error) {
    console.error(error);
    throw error;
}
};

export const getOffersByJobId = async (id=null) => {
    return await generic(OFFERS_BY_JOBID,id)
}
export const getRooms = async (id=null) => {
    return await generic(ROOMS)
}
export const acceptOffer = async (id=null,body=null) => {
    try {
        const response = await fetch(ACCEPT_OFFER(id),{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const rejectOffer = async (id=null) => {
    try {
        const response = await fetch(REJECT_OFFER(id),{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const getJobs = async (id=null) => {
    return await generic(JOBS,id)
}
export const postJobs = async (id=null,body=null) => {
    try {
        const response = await fetch(JOBS,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const getJobsByEmployerId = async (id=null) => {
    return await generic(JOBS_BY_EMPLOYER_ID,id)
}
export const getJobById = async (id=null) => {
    return await generic(JOB_BY_ID,id)
}
export const getMessages = async (id=null) => {
    return await generic(MESSAGES,id)
}
export const getNotificationsByTechId = async (id=null) => {
    return await generic(NOTIFICATIONS_BY_TECHID,id)
}
export const getNotificationsByEmpId = async (id=null) => {
    return await generic(NOTIFICATIONS_BY_EMPID,id)
}
export const getOffers = async (id=null) => {
    return await generic(ALL_OFFERS,id)
}
export const postOffer = async (id=null,body=null) => {
    try {
        const response = await fetch(ALL_OFFERS,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const clockIn = async (id=null,body=null) => {
    try {
        const response = await fetch(CLOCKIN,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const clockOut = async (id=null,body=null) => {
    try {
        const response = await fetch(CLOCKOUT,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export const getEmploymentByOfferId = async (id=null) => {
    return await generic(EMPLOYMENT_BY_OFFERID,id)
}
export const getOffersByTechId = async (id=null) => {
    return await generic(OFFERS_BY_TECHID,id)
}

//usage in components
// import { getAllOffers } from './api';

// const AllOffers = () => {
//   const { params } = useRoute();
//   const { id } = params;
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getAllOffers(id)
//       .then((json) => setData(json))
//       .catch((error) => console.error(error));
//   }, []);

//   // Render your component here
// };
// OR

//   useEffect(() => {
    // const fetchData = async () => {
    // const offersData = await getAllOffers(id);
    // setData(offersData);
    // };
    // fetchData();
//   }, []);