//引入二次封装的axios对象，使用它来发送请求
import request from '@/utils/request'
import type { HospitalDetailResponseData, DepartmentResponseData } from './type'
//枚举请求地址
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某一个医院的科室的数据
    HOSPITALDEPARTMENT_URL = 'hosp/hospital/department/'
}
//获取医院详情的接口
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponseData>(API.HOSPITALDETAIL_URL + hoscode)
// 获取医院科室的接口
export const reqHospitalDepartment = (hoscode: string) => request.get<any, DepartmentResponseData>(API.HOSPITALDEPARTMENT_URL + hoscode)