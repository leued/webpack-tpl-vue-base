import {Loading} from 'element-ui'
var Loader;

function showLoading() {
  Loader = Loading.service()
}

function closeLoading() {
  Loader && Loader.close();
}

export {showLoading, closeLoading}