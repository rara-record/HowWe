import { ICampDetail } from './../types/CampDetail';
import { ICampList } from './../types/Camp';
import { CampType } from 'types/Camp';
import { db } from '../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getCampsByType = async (type: CampType) => {
  const data: ICampList[] = [];
  const q = query(collection(db, 'camps'), where('type', '==', type));
  const camps = await getDocs(q);

  camps.docs.map(doc =>
    data.push({
      id: doc.id,

      data: {
        id: doc.data().id,
        name: doc.data().name,
        type: doc.data().type,
        status: doc.data().status,
        field: doc.data().field,
        skill: doc.data().skill,
        startDate: doc.data().startDate,
        thumbnail: doc.data().thumbnail,
      },
    })
  );
  return data;
};

export const getCamp = async (id: string) => {
  let data: ICampDetail = {
    tags: [],
    name: '',
    desc: '',
    startDate: '',
    process: '',
    seat: '',
    reviewMaterial: [],
    headerImage: '',
    images: [],
    reviews: [],
    faqs: [],
  };
  const q = query(collection(db, 'campDetail'), where('type', '==', id));
  const campId = await getDocs(q);

  campId.docs.forEach(doc => {
    data = {
      tags: doc.data().tags,
      name: doc.data().name,
      desc: doc.data().desc,
      startDate: doc.data().startDate,
      process: doc.data().process,
      seat: doc.data().seat,
      reviewMaterial: doc.data().reviewMaterial,
      headerImage: doc.data().headerImage,
      images: doc.data().images,
      reviews: doc.data().reviews,
      faqs: doc.data().faqs,
    };
    return data;
  });
  return data;
};
