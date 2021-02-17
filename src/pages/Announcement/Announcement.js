import React from 'react'
import { View, Image } from '@tarojs/components'

import 'taro-ui/dist/style/index.scss'

const Announcement = () => (
  <>
    <View className='at-article'>
      <View className='at-article__h1'>
        Title
      </View>
      <View className='at-article__info'>
        2021-01-12&nbsp;&nbsp;&nbsp;Author
      </View>
      <View className='at-article__content'>
        <View className='at-article__p'>
          各位老师、同学:
        </View>
        <View className='at-article__p'>
          大家好！
        </View>
        <View className='at-article__p'>
          由于在线学堂系统的数据库调整，计划于2021年1月25日晚22:00 到1月26日早3:00期间，暂停在线学堂服务，请各位老师和同学提前做好准备，避开这个时间段使用在线学堂。
          感谢您的理解和配合！
        </View>
        <View className='at-article__p'>
          联系电话：123456
        </View>
        <View className='at-article__p'>
          邮箱：aabc@gmail.com
        </View>
      </View>
      <Image
        className='at-article__img'
        src='https://jdc.jd.com/img/400x400'
        mode='widthFix'
      />
    </View>
  </>
)

export default Announcement
