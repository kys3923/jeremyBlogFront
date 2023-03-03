import { useState, useEffect } from 'react';

const VerticalHeader = ({allPosts}) => {

  const [ allCategories, setAllCategories ] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const categorySetter = (arr) => {
      let tempCategories = [];
      let searchNum = 0
      arr.forEach(eachCategory => {
        // validate duplicate
        let ducplicate = tempCategories.find(category => category === eachCategory.category)
        // push to tempArry
        if (!!ducplicate) {
          searchNum += 1
          if(arr.length === searchNum) {
            setAllCategories(tempCategories)
          }
        } else {
          searchNum += 1
          tempCategories.push(eachCategory.category);
          // reached max amount, setState
          if(arr.length === searchNum) {
            setAllCategories(tempCategories)
          }
        }
      })
    }

    categorySetter(allPosts)

    return () => {
      isMounted = false;
    }
  },[allPosts])

  const subCategorySetter = (allArticles, text) => {
    let filteredSubCategory = [];
    let searchedNum = 0;
    let returning = false;

    allArticles.forEach((article) => {
      if (article.category === text) {
        if (filteredSubCategory.length === 0) {
          filteredSubCategory.push(article)
          searchedNum += 1;
          if (searchedNum === allArticles.length) {
            returning = true
          }
        } else {
          let duplicate = filteredSubCategory.find(filteredArticle => filteredArticle.subCategory === article.subCategory)
          if(!!duplicate) {
            searchedNum += 1;
            if (searchedNum === allArticles.length) {
              returning = true
            }
          } else {
            filteredSubCategory.push(article)
            searchedNum += 1;
            if (searchedNum === allArticles.length) {
              returning = true
            }
          }
        }
      } else {
        searchedNum += 1;
        if (searchedNum === allArticles.length) {
          returning = true
        }
      }
    })

    if(returning) {
      return <div>
        {filteredSubCategory.map((article, i) => {
          return <p key={i}>{article.subCategory}</p>
        })}
      </div>
    }
  }

  return (
    <nav className="flex flex-col flex-nowrap">
      <div className="flex justify-center px-8 py-2">
        <p className="text-slate-300 font-bold text-md truncate"><a href='/'>YK Codes</a></p>
      </div>
      <div>
        <ul>
          <li><a href='/dashboard'>dashboard</a></li>
          <li><a href='/post'>post</a></li>
          <li><a href='/settings'>settings</a></li>
        </ul>
        {allCategories.length > 0 && allCategories.map((category) => {
          return <div key={category} className='my-2'>
              <p className='border-b border-slate-500 font-bold'>{category}</p>
              <div>
                {subCategorySetter(allPosts, category)}
              </div>
            </div>
        })}
      </div>
    </nav>
  );
}
export default VerticalHeader;