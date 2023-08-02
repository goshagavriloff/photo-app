export const userQuery=(userId)=>{
    const query=`*[_type=="user"&&_id == '${userId}']`;
    return query;
}
export const categoryQuery=()=>{
    const query=`*[_type=="category"]`;
    return query;
}
export const categoryQueryByName=(name)=>{
    const query=`*[_type=="category"&&name=='${name}']`;
    return query;
}

export const searchQuery=(searchTerm)=>{
    const query=`*[_type=="pin"&&title match '${searchTerm}' || category_name->title match '${searchTerm}' || about match '${searchTerm}*'|| category_name->url match '${searchTerm}']{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[]{
            _id,
            postedBy -> {
                _id,
                userName,
                image
            }
        }
    }`;
    return query;    
}

export const feedQuery=`*[_type=='pin'] | order(_createAt desc){
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy -> {
        _id,
        userName,
        image
    },
    save[]{
        _id,
        postedBy -> {
            _id,
            userName,
            image
        }
    }
}`;



export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };