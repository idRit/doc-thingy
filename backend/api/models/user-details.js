const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
  general: {
    name: {
      type: String,
    },
    dob: {
      type: Date,
    },
    age: {
      type: Number,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    bmi: {
      type: Number,
    },
    sex: {
      type: String,
      enum: ['m', 'f', 'o'],
    },
    address: {
      type: String,
    },
    telephone_number: {
      type: String,
    },
    mobile_number: {
      type: String,
    },
    email: {
      type: String,
    },
    occupation: {
      type: String,
    },
    maritial_status: {
      type: String,
      enum: ['single', 'married', 'divorced', 'widowed'],
    },
    referred_doctor: {
      type: String,
    },
  },
  housing: {
    type: {
      type: String,
      enum: ['chawl', 'flat', 'apartment', 'bunglow'],
    },
    elavator_present: {
      type: Boolean,
    },
    floor: {
      type: Number,
    },
    need_for_stairs: {
      type: String,
    },
  },
  diagnosis_comorbodities_map: [
    {
      diagnosis: {
        type: String,
        enum: ['COPD', 'Interstitial Lung Disease', 'Bronchiectasis', 'Asthma'],
      },
      comorbodities: [
        {
          metabolic_disease_medication: {
            type: String,
          }
        },
        {
          heart_disease_medication: {
            type: String,
          },
        },
        {
          neurological_disease_medication: {
            type: String,
          },
        },
      ],
    },
    {
      diagnosis: {
        type: String,
        enum: ['Post-TB sequale',
          'Obstructive sleep apnoea',
          'Respiratory Failure',
          'Lung cancer'],
      },
      comorbodities: [
        {
          musculoskeletal_disorder_medication: {
            type: String,
          }
        },
        {
          h_o_surgery_medication: {
            type: String,
          },
        },
        {
          psychological_disorder_medication: {
            type: String,
          },
        },
      ],
    },
    {
      diagnosis: {
        type: String,
        enum: ['Post-PTCA',
          'Post-CABG',
          'Post-COVID',
          'Pulmonary Hypertension'],
      },
      comorbodities: [
        {
          cancer_medication: {
            type: String,
          }
        },
        {
          gastro_oesophagal_reflux_disease_medication: {
            type: String,
          },
        },
        {
          peripheral_vascular_disease_medication: {
            type: String,
          },
        },
        {
          skin_disease_medication: {
            type: String,
          },
        },
        {
          myopathy_neuropathy_medication: {
            type: String,
          },
        }
      ],
    }
  ],
  history: {
    type: String
  },
  symptoms: {
    dyspnoea: {
      intensity: String,
      aggravating_factors: String,
      variation: {
        seasonal: String,
        positional: String,
        pnd: String,
        orthopnoea: String,
      },
    },
    cough: {
      type: {
        type: String,
        enum: ['non-productive', 'productive'],
      },
      sputum: {
        presence: {
          type: Boolean,
        },
        colour: {
          type: String,
        },
        odour: {
          type: String,
        },
        amount: {
          type: String,
        },
      },
      variation: {
        seasonal: String,
        positional: String,
      }
    },
    non_productive_coungh_details: {
      activity_related: Boolean,
      activities: String,
      reduced_on_oxgen: Boolean,
    },
    other_symptoms: {
      chest_tightness: Boolean,
      joint_pain: Boolean,
      numb_feet: Boolean,
      urinary_incontinence: Boolean,
      syncope_pre_syncope: Boolean,
      vertigo: Boolean,
      anxiety: Boolean,
      depression: Boolean,
    },
  },
  fatigue: {
    presence: Boolean,
    rating_on_vas: Number,
    joint_pain: Boolean,
    urinary_incontinence: Boolean,
  },
  vaccination_details: {
    influenza: {
      taken: Boolean,
      date: Date,
    },
    pneumonia: {
      taken: Boolean,
      date: Date,
    },
    covid: {
      taken: Boolean,
      date: Date,
    },
  },
  o_a: String,
  posture: String,
  medication: {
    pulmonary: String,
    others: String,
  },
  investigations: {
    ct_scan: {
      date: Date,
      findings: String,
    },
    echo_2d: {
      date: Date,
      findings: String,
    },
    ecg: {
      date: Date,
      findings: String,
    },
    chest_xray: {
      date: Date,
      findings: String,
    },
    abg: {
      date: Date,
      findings: String,
    },
    others: {
      date: Date,
      findings: String,
    },
  },
  physical_activities: {
    current_activity_levels: String,
    problematic_adls: String,
  },
  rehab_goals: {
    short_term: {
      patient_goals: String,
      therapist_goals: String,
    },
    long_term: {
      patient_goals: String,
      therapist_goals: String,
    },
  },
  crdq: {
    being_angry_or_upset: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    shower: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    bending: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    carrying: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    dressing: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    eating: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    walking: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    housework: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    hurrying: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
    lying_flat: [{
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }, {
      date: Date,
      presence: Boolean,
    }],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('user_details_schema', userDetailsSchema);