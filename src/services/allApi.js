
import { BASE_URL } from './baseURL'
import { commonAPI } from './commonApi'

// uploading video
export const uploadVideo = async (video) => {
    // http post req to http://localhost:4000/video for adding video in json server and retun repose to Add component
    return await commonAPI("POST", `${BASE_URL}/videos`, video)
}

// get all videos from json server
export const getAllvideo = async () => {
    // http get req to http://localhost:4000/video for display video in json server and retun repose to view component
    return await commonAPI("GET", `${BASE_URL}/videos`, "")
}

//  get an single video 
export const getAvideo = async (id) => {
    // http get req to http://localhost:4000/video for display an single video in json server and retun repose to video card component
    return await commonAPI("GET", `${BASE_URL}/videos/${id}`, "")
}

//  delete an single video 
export const deleteAvideo = async (id) => {
    // http get req to http://localhost:4000/video for delete an single video in json server and retun repose to video card component
    return await commonAPI("DELETE", `${BASE_URL}/videos/${id}`, {})
}

// insert video in watch history
export const addToHistory = async(videoHistory)=>{
    // http post request to http://localhost:4000/history for adding video history to json server and return response to videoCard
    return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}

// get video watch history from json server
export const getHistory = async()=>{
// http get request to http://localhost:4000/history to get video history from json server and return response to watchhistory   
return await commonAPI("GET",`${BASE_URL}/history`,"")
}

// delete watchlist
export const deleteWatchlist = async (id)=>{
    // http delete req to http://localhost:4000/history/id for deleting category in json server and return reponse to category component
    return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}

// delete all watchlist
export const deleteAllWatchlist = async ()=>{
    // http delete req to http://localhost:4000/history/id for deleting category in json server and return reponse to category component
    return await commonAPI("DELETE",`${BASE_URL}/history/`,"")
}

// add category
export const addCategory = async (body) => {
    // http post req to http://localhost:4000/category for adding video in json server and return reponse to category component
    return await commonAPI("POST", `${BASE_URL}/category`, body)
}

// get all category
export const getAllCategory = async () => {
    // http post req to http://localhost:4000/category for adding video in json server and return reponse to category component
    return await commonAPI("GET", `${BASE_URL}/category`, "")
}

// delete category
export const deleteCategory = async (id)=>{
    // http delete req to http://localhost:4000/category/id for deleting category in json server and return reponse to category component
    return await commonAPI("DELETE",`${BASE_URL}/category/${id}`,{})
}

// update category from json server
export const updateCategory = async (id,updatedCategoryBody)=>{
    // http put req to http://localhost:4000/category/id for updating existing category from json server and return reponse to category component
    return await commonAPI("PUT",`${BASE_URL}/category/${id}`,updatedCategoryBody)
}

