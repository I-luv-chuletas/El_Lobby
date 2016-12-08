export class Shouts {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
    id: string;
    rating: number;
    userID: string;
    taggedDepts: string; // Departamentos mencionados/tagueados en
    commentSectionId: number;
    title: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    // category: string;
    // status: string;

}
