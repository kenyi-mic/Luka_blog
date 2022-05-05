export interface Post{
    _id: string;
    _createdAt: string;
    title: string;
    author:{
        name: string;
        image: string;
    };
    comments: Comment[];
    description: string;
    mainImage: {
        asset:{
            url: string;
        };
    };
    slug:{
        current: string;
    };
    body:[object];
}



export interface Comment{
    approved: boolean;
    comment:string;
    email:string;
    name:string;
    post:{
        _ref: string;
        _type: string;
    };
    _createdAt: string;
    _id:string;
    _rev:string;
    _type: string;
    _updatedAt: string;
}

export interface Book{
    _id:string;
    _createdAt:string;
    _rev:string;
    _type:string;
    _updatedAt:string;
    author:{
        name:string;
        title:string;
    };
    title:string;
    description:string;
    link:string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    slug:{
     _type: "slug";
     current:string;
    }
    body:[object];
}