# Elevator Blockly Saga

2 Current working versions: 1) elevator_saga copy.html and 2) elevator_saga_working_version.html. Working version will not have a the side tutorial menu yet and will implement basic functionality including 3 difficulty levels that can solve up to challenge 5 reliably. To continue working on copy when free to try to implement side menu. 

## Reference solution for intermediate solution (solves up to level 4 reliably)

```XML
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="elevator_frame_basic" id="C#[[TzQJ)uZl4n^GTW=e" x="137" y="87">
    <field name="NAME">Name your program!</field>
    <statement name="todo">
      <block type="scan_floors" id="Yp.=0$4iP[mwajAwvq%-">
        <statement name="todo">
          <block type="updown_button_pressed" id="TX[jeMQ4`6%8t+mn{{zm">
            <statement name="todo">
              <block type="find_idle_elevator_improved" id="lfE0K4+dbguZs1D9=K*x"></block>
            </statement>
          </block>
        </statement>
        <next>
          <block type="for_each_elevator" id="ClxXZhr)_.]7sl|4T}$f">
            <statement name="todo">
              <block type="do_when_idle" id="N8S$r_7dc0Vt3O2jCGvU">
                <statement name="action">
                  <block type="go_to_floor_specific_basic" id="RHj,uu!7369|j$fzv-5`">
                    <value name="floor_num">
                      <block type="math_number" id="{t43(pT6,o83~)_Q/}sD">
                        <field name="NUM">0</field>
                      </block>
                    </value>
                  </block>
                </statement>
                <next>
                  <block type="when_passenger_presses" id="P#ortVsQ+p}QKjNR^41=">
                    <statement name="action">
                      <block type="go_to_floor_specific_target" id="=pUF4KhQEzbYM_YY_2,j"></block>
                    </statement>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
```

## Reference solution for complex solution (same as "basic" solution and can solve up to level 5 reliably)

```XML
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="elevator_frame_basic" id="HG1/RuK?8+s3y1ZFDmcC" x="-163" y="-87">
    <field name="NAME">ZY's elevator</field>
    <statement name="todo">
      <block type="scan_floors" id="$u*lWQ#/(ghS8TFRI8dq">
        <statement name="todo">
          <block type="updown_button_pressed" id="D=}5HHTSZxp-hE_%e{X~">
            <statement name="todo">
              <block type="find_idle_elevator" id="Oj64]y_YauZYRb7z3t}o"></block>
            </statement>
          </block>
        </statement>
        <next>
          <block type="for_each_elevator" id="BTx{c7}V(c~~lG6$dL:j">
            <statement name="todo">
              <block type="do_when_idle" id="g(ZFqI2YPSW9W6`nwb-i">
                <statement name="action">
                  <block type="get_pressed_floors" id="4J:*?LJT?DUez)+xrh$?">
                    <next>
                      <block type="choose_first_button" id="T?N9(g$5*^0q2WA365hZ">
                        <next>
                          <block type="go_to_floor_target" id="[/gzpl)04KAB%Vv_IVHN"></block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="when_passenger_presses" id="rc(R::(f;c~uG6Fl-@j,">
                    <statement name="action">
                      <block type="go_to_floor_target" id="rVm1WX%%CjRz}a2f#W7~"></block>
                    </statement>
                    <next>
                      <block type="when_passing_floor" id="k3fA=LOac596?L,7_De!">
                        <statement name="action">
                          <block type="if_elevator_stops" id="Czl_F|ni6konk=37|15n">
                            <statement name="todo">
                              <block type="remove_floor_from_queue" id="|)hnRQMx_V*NY[2ip3qw">
                                <next>
                                  <block type="go_to_floor_queue" id="[hQMU_!+~_IoERw9Hbw~"></block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </statement>
                        <next>
                          <block type="when_stopped" id="1k(h3v,5pc^E6IF)N)^!">
                            <statement name="action">
                              <block type="switch" id="A(ORAHdzyuUZ!FUwjd3I">
                                <statement name="todo">
                                  <block type="options" id="oKzs0JqCbf6%_*$,p4c_">
                                    <field name="options">min</field>
                                  </block>
                                </statement>
                                <next>
                                  <block type="toggle_indicator" id="1o5-32^F:vO_Tf3*,WC0"></block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
```
