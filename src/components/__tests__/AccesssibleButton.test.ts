import { beforeEach, describe, expect, it } from 'vitest'
import AccessibleButton from '@/components/AccessibleButton.vue'
import { shallowMount } from '@vue/test-utils'

describe('AccessibleIcon.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(AccessibleButton, {
      props: {
        text: 'test'
      }
    })
  })

  it('mounts component correctly', () => {
    expect(wrapper.html()).toBeTruthy()
  })
})
