import { db } from 'service/firebase';
import { ICommunity } from 'types/Community';
import { collection, query, getDocs } from 'firebase/firestore';

export const getCommunties = async () => {
  const data: ICommunity[] = [];
  const q = query(collection(db, 'communities'));
  const communities = await getDocs(q);

  communities.docs.map(doc =>
    data.push({
      id: doc.data().id,
      tags: doc.data().tags,
      title: doc.data().title,
      content: doc.data().content,
      comments: doc.data().comments,
    })
  );
  return data;
};
