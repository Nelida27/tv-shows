import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AvatarComp from '../AvatarComp.vue'

describe('PosterImage', () => {
  it('shows the image', () => {
    const wrapper = mount(AvatarComp, { props: { src: 'https://example.com/image.jpg'} })
    expect(wrapper.html()).toContain('https://example.com/image.jpg')
  })

  it('shows default iamge', () => {
    const wrapper = mount(AvatarComp, { props: { src: '@/assets/images/no-image.png' } })
    expect(wrapper.html()).toContain('@/assets/images/no-image.png')
  })
})