export class Shouts {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  } 
    id: number;
    rating: number;
    userID: string;
    taggedDepts: string; // Departamentos mencionados/tagueados en
    commentSectionId: number;
    title: string;
    message: string;
    // category: string;
    // status: string;

}
