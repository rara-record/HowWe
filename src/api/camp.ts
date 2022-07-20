import { db } from '../service/firebase';
import { ICamp } from '../types/Camp';
import { CampType } from 'types/Camp';

import { ICampDetail } from '../types/CampDetail';
import { query, where, collection, getDocs } from 'firebase/firestore';

export const getCampsByType = async (type: CampType) => {
  const data: ICamp[] = [];
  const q = query(collection(db, 'camps'), where('type', '==', type));
  const camps = await getDocs(q);

  camps.docs.forEach(doc =>
    data.push({
      id: doc.data().id,
      name: doc.data().name,
      type: doc.data().type,
      status: doc.data().status,
      field: doc.data().field,
      skill: doc.data().skill,
      startDate: doc.data().startDate,
      thumbnail: doc.data().thumbnail,
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
    theme: [],
    buttonName: '',
  };
  const q = query(collection(db, 'campDetail'), where('id', '==', id));
  const campId = await getDocs(q);

  campId.docs.map(doc => {
    return (data = {
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
      theme: doc.data().theme,
      buttonName: doc.data().buttonName,
    });
  });
  return data;
};
