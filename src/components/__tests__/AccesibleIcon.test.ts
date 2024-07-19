import { beforeEach, describe, expect, it } from 'vitest'
import AccessibleIcon from '@/components/AccessibleIcon.vue'
import { shallowMount } from '@vue/test-utils'

describe('AccessibleIcon.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(AccessibleIcon, {
      props: {
        icon: 'book'
      }
    })
  })

  it('Icon has an aria-hidden=true attribute.', () => {
    expect(wrapper.attributes()['aria-hidden'] === 'true').toBe(true)
  })
})
