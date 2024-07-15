import { beforeEach, describe, expect, it } from 'vitest'
import AccessibleIcon from '@/components/AccessibleIcon.vue'
import { shallowMount } from '@vue/test-utils'

describe('AccessibleIcon.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(AccessibleIcon, {
      props: {
        icon: 'horse'
      }
    })
  })

  it('Icon has an aria-hidden=true attribute.', () => {
    expect(wrapper.attributes()).toStrictEqual({ 'aria-hidden': 'true' })
  })
})
